import { MetadataRoute } from "next";
// Importamos a constante de coordenações
import { coordinations } from "@/constants/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.sitedocliente.com.br";

  // 1. Mapeia as rotas estáticas
  const staticRoutes = ["", "/quem-somos", "/servicos", "/contato"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    }),
  );

  // 2. Mapeia as rotas dinâmicas de coordenações automaticamente
  const dynamicCoordinationRoutes = coordinations.map((coordination) => ({
    url: `${baseUrl}/servicos/${coordination.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Retorna tudo unificado para o Googlebot
  return [...staticRoutes, ...dynamicCoordinationRoutes];
}
