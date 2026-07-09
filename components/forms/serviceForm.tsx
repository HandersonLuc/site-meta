"use client";

import { useId } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type CoordenacaoKey =
  | "gnc"
  | "ot_pr"
  | "plan_fin"
  | "des_maq"
  | "constr_energ"
  | "tecnologia";

interface FormularioServicoProps {
  className?: string;
  titulo?: string;
  subtitulo?: string;
  coordenacao?: CoordenacaoKey | string;
  servicos?: string[];
  servicoInicial?: string;
}

const investimentoOptions = [
  "R$3.500,00 - R$5.000,00",
  "R$5.000,00 - R$10.000,00",
  "Mais de R$10.000,00",
];

const servicosPorCoordenacao: Record<CoordenacaoKey, string[]> = {
  gnc: [
    "Análise de Mercado",
    "Posicionamento Digital",
    "Planejamento Estratégico",
  ],
  ot_pr: [
    "Mapeamento de Processos",
    "Pesquisa de Clima",
    "Estruturação Interna",
    "Gestão de Estoque",
    "Estudo de Tempo",
    "Simulação de Processos",
  ],
  plan_fin: ["FP&A", "Estudo de Viabilidade", "Precificação de Produtos"],
  des_maq: [
    "Desenho Mecânico",
    "Estudo de Materiais",
    "Prototipagem 3D",
    "Análise Estrutural",
    "Manuais Técnicos",
  ],
  constr_energ: [
    "Projeto Arquitetônico",
    "Instalações Hidrossanitárias",
    "Regularização de Imóveis",
    "Orçamento de Obras",
    "Vistoria Hidrossanitária Predial",
    "Estudo de Luminotécnica",
    "Instalações Elétricas",
  ],
  tecnologia: ["Site", "Aplicativo", "Automação", "SEO"],
};

const coordenacaoAliases: Record<string, CoordenacaoKey> = {
  "gestão de negócios": "gnc",
  "gestao de negocios": "gnc",
  gnc: "gnc",
  "otimização de processos": "ot_pr",
  "otimizacao de processos": "ot_pr",
  ot_pr: "ot_pr",
  "planejamento financeiro": "plan_fin",
  plan_fin: "plan_fin",
  "desenvolvimento de máquinas": "des_maq",
  "desenvolvimento de maquinas": "des_maq",
  des_maq: "des_maq",
  "construção e energia": "constr_energ",
  "construcao e energia": "constr_energ",
  constr_energ: "constr_energ",
  tecnologia: "tecnologia",
};

function getCoordenacaoKey(coordenacao?: string) {
  return coordenacao ? coordenacaoAliases[coordenacao.toLowerCase()] : undefined;
}

function getServicos(coordenacao?: string, servicos?: string[]) {
  if (servicos?.length) {
    return servicos;
  }

  const coordenacaoKey = getCoordenacaoKey(coordenacao);

  if (coordenacaoKey) {
    return servicosPorCoordenacao[coordenacaoKey];
  }

  return Object.values(servicosPorCoordenacao).flat();
}

export function FormularioServico({
  className,
  titulo = "Solicite seu projeto",
  subtitulo = "Entre em contato com nossos consultores comerciais.",
  coordenacao,
  servicos,
  servicoInicial = "",
}: FormularioServicoProps) {
  const formId = useId();
  const coordenacaoKey = getCoordenacaoKey(coordenacao);
  const serviceOptions = getServicos(coordenacao, servicos);
  const serviceLabel =
    coordenacaoKey === "tecnologia"
      ? "Qual tipo de solução você busca?"
      : coordenacaoKey === "gnc"
        ? "Que tipo de solução você busca?"
        : "Que tipo de serviço você busca?";
  const showTecnologiaQuestion = coordenacaoKey === "tecnologia";

  return (
    <div
      className={cn(
        "w-full max-w-full bg-white rounded-2xl p-6 sm:p-8 shadow-[0_12px_50px_rgba(0,0,0,0.4)] transition-all duration-300",
        className
      )}
    >
      <div className="mb-6 space-y-2">
        <h2 className="text-xl sm:text-2xl leading-tight font-bold text-black break-words">{titulo}</h2>
        <p className="text-sm text-gray-600 break-words">{subtitulo}</p>
      </div>

      <form className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor={`${formId}-nome`} className="font-semibold text-sm text-black">
            Nome <span className="text-red-500">*</span>
          </Label>
          <Input
            id={`${formId}-nome`}
            name="nome"
            placeholder="Digite seu nome"
            className="h-10 rounded-md border border-gray-300 focus-visible:ring-[#2AD8FF]"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor={`${formId}-email`} className="font-semibold text-sm text-black">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id={`${formId}-email`}
            name="email"
            type="email"
            placeholder="Digite seu email"
            className="h-10 rounded-md border border-gray-300 focus-visible:ring-[#2AD8FF]"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor={`${formId}-telefone`} className="font-semibold text-sm text-black">
            Telefone <span className="text-red-500">*</span>
          </Label>
          <Input
            id={`${formId}-telefone`}
            name="telefone"
            type="tel"
            placeholder="+55 11 96123-4567"
            className="h-10 rounded-md border border-gray-300 focus-visible:ring-[#2AD8FF]"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor={`${formId}-tipo-servico`} className="font-semibold text-sm text-black">
            {serviceLabel} <span className="text-red-500">*</span>
          </Label>
          <select
            id={`${formId}-tipo-servico`}
            name="tipoServico"
            defaultValue={servicoInicial}
            className="h-10 w-full min-w-0 rounded-md border border-gray-300 bg-white px-2.5 text-sm text-black focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#2AD8FF]/50 disabled:cursor-not-allowed disabled:opacity-50"
            required
          >
            <option value="">Selecione uma opção</option>
            {serviceOptions.map((servico) => (
              <option key={servico} value={servico}>
                {servico}
              </option>
            ))}
          </select>
        </div>

        {showTecnologiaQuestion && (
          <div className="space-y-2">
            <Label htmlFor={`${formId}-usa-automacao`} className="font-semibold text-sm text-black">
              Você já utiliza alguma ferramenta de automação hoje? <span className="text-red-500">*</span>
            </Label>
            <select
              id={`${formId}-usa-automacao`}
              name="usaAutomacao"
              className="h-10 w-full min-w-0 rounded-md border border-gray-300 bg-white px-2.5 text-sm text-black focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#2AD8FF]/50 disabled:cursor-not-allowed disabled:opacity-50"
              required
            >
              <option value="">Selecione uma opção</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
              <option value="Pretendo">Pretendo</option>
            </select>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor={`${formId}-investimento`} className="font-semibold text-sm text-black">
            Quanto deseja investir? <span className="text-red-500">*</span>
          </Label>
          <select
            id={`${formId}-investimento`}
            name="investimento"
            className="h-10 w-full min-w-0 rounded-md border border-gray-300 bg-white px-2.5 text-sm text-black focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#2AD8FF]/50 disabled:cursor-not-allowed disabled:opacity-50"
            required
          >
            <option value="">Selecione uma opção</option>
            {investimentoOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor={`${formId}-mensagem`} className="font-semibold text-sm text-black">
            Conte mais sobre como podemos te ajudar <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id={`${formId}-mensagem`}
            name="mensagem"
            placeholder="Digite sua mensagem"
            className="min-h-[90px] rounded-md border border-gray-300 focus-visible:ring-[#2AD8FF]"
            required
          />
        </div>

        <div className="pt-4">
          <Button
            type="button"
            className="w-full sm:w-auto bg-[#007BFF] hover:bg-[#0066D1] text-white font-medium rounded-full px-8 py-2 transition-all"
          >
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FormularioServico;
