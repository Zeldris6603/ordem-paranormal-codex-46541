import { useClassifiedFiles, useAccessibleFiles } from "@/hooks/useClassifiedFiles";
import { ClassifiedFileCard } from "./ClassifiedFileCard";
import { DecodingLoader } from "./DecodingLoader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { FileText, Shield, BookOpen, Skull, Box, Eye } from "lucide-react";

export const ClassifiedFilesSection = () => {
  const { data: allFiles, isLoading: loadingAll } = useClassifiedFiles();
  const { data: accessibleFiles, isLoading: loadingAccessible } = useAccessibleFiles();

  if (loadingAll || loadingAccessible) {
    return (
      <div className="flex items-center justify-center py-12">
        <DecodingLoader text="CARREGANDO ARQUIVOS CLASSIFICADOS" />
      </div>
    );
  }

  const accessibleFileIds = new Set(accessibleFiles?.map((f) => f.id) || []);

  const categorizeFiles = (files: typeof allFiles) => {
    return {
      all: files || [],
      reports: files?.filter((f) => f.category === "report") || [],
      creatures: files?.filter((f) => f.category === "creature") || [],
      symbols: files?.filter((f) => f.category === "symbol") || [],
      artifacts: files?.filter((f) => f.category === "artifact") || [],
      prophecies: files?.filter((f) => f.category === "prophecy") || [],
    };
  };

  const categories = categorizeFiles(allFiles);
  const accessibleCount = accessibleFiles?.length || 0;
  const totalCount = allFiles?.length || 0;

  return (
    <section id="classified-files" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="mb-4">
          <span className="text-primary font-terminal text-sm animate-pulse">
            &gt; ACESSANDO BANCO DE DADOS DA ORDO...
          </span>
        </div>
        <Badge className="mb-6 bg-destructive/20 text-destructive border-destructive hover:bg-destructive/30 text-lg px-6 py-2 font-courier">
          ARQUIVOS CLASSIFICADOS
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-courier">
          Banco de Dados <span className="text-primary">Ordo Realitas</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-courier mb-4">
          Arquivos confidenciais, relatórios de campo e documentação de ameaças paranormais.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm font-terminal">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-primary">
              Acesso Autorizado: {accessibleCount}/{totalCount}
            </span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-3 lg:grid-cols-6 mb-8 font-terminal">
          <TabsTrigger value="all" className="text-xs">
            <FileText className="w-3 h-3 mr-1" />
            TODOS ({totalCount})
          </TabsTrigger>
          <TabsTrigger value="reports" className="text-xs">
            <BookOpen className="w-3 h-3 mr-1" />
            RELATÓRIOS ({categories.reports.length})
          </TabsTrigger>
          <TabsTrigger value="creatures" className="text-xs">
            <Skull className="w-3 h-3 mr-1" />
            CRIATURAS ({categories.creatures.length})
          </TabsTrigger>
          <TabsTrigger value="symbols" className="text-xs">
            <Eye className="w-3 h-3 mr-1" />
            SÍMBOLOS ({categories.symbols.length})
          </TabsTrigger>
          <TabsTrigger value="artifacts" className="text-xs">
            <Box className="w-3 h-3 mr-1" />
            ARTEFATOS ({categories.artifacts.length})
          </TabsTrigger>
          <TabsTrigger value="prophecies" className="text-xs">
            <Shield className="w-3 h-3 mr-1" />
            PROFECIAS ({categories.prophecies.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.all.map((file) => (
              <ClassifiedFileCard
                key={file.id}
                file={file}
                hasAccess={accessibleFileIds.has(file.id)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reports" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.reports.map((file) => (
              <ClassifiedFileCard
                key={file.id}
                file={file}
                hasAccess={accessibleFileIds.has(file.id)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="creatures" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.creatures.map((file) => (
              <ClassifiedFileCard
                key={file.id}
                file={file}
                hasAccess={accessibleFileIds.has(file.id)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="symbols" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.symbols.map((file) => (
              <ClassifiedFileCard
                key={file.id}
                file={file}
                hasAccess={accessibleFileIds.has(file.id)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="artifacts" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.artifacts.map((file) => (
              <ClassifiedFileCard
                key={file.id}
                file={file}
                hasAccess={accessibleFileIds.has(file.id)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="prophecies" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.prophecies.map((file) => (
              <ClassifiedFileCard
                key={file.id}
                file={file}
                hasAccess={accessibleFileIds.has(file.id)}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 p-6 bg-accent/5 border border-accent/30 rounded font-terminal text-center">
        <p className="text-xs text-accent">
          ⚠ ATENÇÃO: Compartilhamento não autorizado de arquivos classificados é punível sob o Protocolo 13-Omega da Ordo Realitas
        </p>
      </div>
    </section>
  );
};
