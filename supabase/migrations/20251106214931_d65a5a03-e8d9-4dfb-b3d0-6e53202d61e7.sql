-- Create agents table
CREATE TABLE public.agents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  code_name TEXT NOT NULL UNIQUE,
  real_name TEXT NOT NULL,
  class TEXT NOT NULL,
  origin TEXT NOT NULL,
  theme_color TEXT NOT NULL,
  biography TEXT,
  strengths TEXT,
  weaknesses TEXT,
  access_level INT NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create files table
CREATE TABLE public.files (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  category TEXT NOT NULL, -- 'report', 'creature', 'artifact', 'symbol', 'prophecy'
  content TEXT NOT NULL,
  classification TEXT NOT NULL, -- 'PÚBLICO', 'CONFIDENCIAL', 'SECRETO', 'MÁXIMO'
  required_access_level INT NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create agent_access table (tracks which agents can access which files)
CREATE TABLE public.agent_access (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  agent_id UUID REFERENCES public.agents(id) ON DELETE CASCADE,
  file_id UUID REFERENCES public.files(id) ON DELETE CASCADE,
  granted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(agent_id, file_id)
);

-- Create activity_logs table
CREATE TABLE public.activity_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  agent_id UUID REFERENCES public.agents(id) ON DELETE CASCADE,
  action TEXT NOT NULL,
  details TEXT,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.agents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.files ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.agent_access ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_logs ENABLE ROW LEVEL SECURITY;

-- RLS Policies for agents
CREATE POLICY "Users can view their own agent profile"
  ON public.agents FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own agent profile"
  ON public.agents FOR UPDATE
  USING (auth.uid() = user_id);

-- RLS Policies for files
CREATE POLICY "Agents can view files they have access to"
  ON public.files FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.agent_access aa
      JOIN public.agents a ON aa.agent_id = a.id
      WHERE aa.file_id = files.id
      AND a.user_id = auth.uid()
    )
    OR
    required_access_level = 0 -- Public files
  );

-- RLS Policies for agent_access
CREATE POLICY "Agents can view their own access grants"
  ON public.agent_access FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.agents
      WHERE agents.id = agent_access.agent_id
      AND agents.user_id = auth.uid()
    )
  );

-- RLS Policies for activity_logs
CREATE POLICY "Agents can view their own activity logs"
  ON public.activity_logs FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.agents
      WHERE agents.id = activity_logs.agent_id
      AND agents.user_id = auth.uid()
    )
  );

CREATE POLICY "Agents can insert their own activity logs"
  ON public.activity_logs FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.agents
      WHERE agents.id = activity_logs.agent_id
      AND agents.user_id = auth.uid()
    )
  );

-- Insert the four main agents (without user_id, to be linked during signup)
INSERT INTO public.agents (code_name, real_name, class, origin, theme_color, biography, strengths, weaknesses, access_level) VALUES
(
  'MARINE',
  'Marine Flamarion',
  'Combatente',
  'Ex-Militar',
  'wine',
  'Sobrevivente do Incidente Deus da Morte. Carrega o peso de ter matado um companheiro durante a missão.',
  'Combate corpo-a-corpo, liderança sob pressão, resistência física',
  'PTSD, culpa extrema, dificuldade em confiar',
  3
),
(
  'SANTER',
  'Santer',
  'Ocultista',
  'Cientista',
  'slate',
  'Cientista que envelheceu 10 anos em um segundo durante experimento paranormal. 30 anos cronológicos, 40 biológicos.',
  'Conhecimento científico, análise de anomalias temporais, paciência',
  'Corpo enfraquecido, ansiedade sobre o tempo, isolamento social',
  3
),
(
  'MIKAEL',
  'Mikael Trovi',
  'Ocultista',
  'Revoltado',
  'emerald',
  'Jovem ocultista que perdeu a família em ritual do Coletivo das Sombras. Especialista em runas e simbologia.',
  'Conhecimento ritualístico, improviso, coragem',
  'Impulsividade, insubordinação, sede de vingança',
  2
),
(
  'NOAH',
  'Noah',
  'Especialista',
  'Mercenário',
  'amber',
  'Ex-mercenário salvo pela Ordo após contato com Lodo Vivo. Agora serve como analista tático.',
  'Precisão, análise tática, frieza sob pressão',
  'Desconfiança, isolamento emocional, dificuldade em trabalhar em equipe',
  2
);

-- Function to automatically create activity log on file access
CREATE OR REPLACE FUNCTION log_file_access()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.activity_logs (agent_id, action, details)
  SELECT a.id, 'FILE_ACCESS', 'Accessed file: ' || NEW.title
  FROM public.agents a
  WHERE a.user_id = auth.uid();
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for updated_at on files
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_files_updated_at
  BEFORE UPDATE ON public.files
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();