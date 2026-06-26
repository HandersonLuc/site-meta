"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendContactEmail } from "@/actions/sendContactEmail";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    try {
      const result = await sendContactEmail(formData);
      if (result.success) {
        setSubmitStatus("success");
        formElement.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Erro capturado no frontend:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-[0_12px_50px_rgba(0,0,0,0.4)] transition-all duration-300">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nome completo */}
        <div className="space-y-2">
          <Label htmlFor="nome" className="font-semibold text-sm text-black">
            Nome completo <span className="text-red-500">*</span>
          </Label>
          <Input
            id="nome"
            name="nome"
            placeholder="Digite seu nome completo"
            className="h-10 rounded-md border border-gray-300 focus-visible:ring-[#2AD8FF]"
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="font-semibold text-sm text-black">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Digite seu email"
            className="h-10 rounded-md border border-gray-300 focus-visible:ring-[#2AD8FF]"
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Telefone */}
        <div className="space-y-2">
          <Label htmlFor="telefone" className="font-semibold text-sm text-black">
            Telefone <span className="text-red-500">*</span>
          </Label>
          <Input
            id="telefone"
            name="telefone"
            type="tel"
            placeholder="+55 11 96123-4567"
            className="h-10 rounded-md border border-gray-300 focus-visible:ring-[#2AD8FF]"
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Quanto deseja investir */}
        <div className="space-y-2">
          <Label htmlFor="investimento" className="font-semibold text-sm text-black">
            Quanto deseja investir? <span className="text-red-500">*</span>
          </Label>
          <select
            id="investimento"
            name="investimento"
            className="h-10 w-full rounded-md border border-gray-300 bg-white focus-visible:ring-[#2AD8FF]"
            required
            disabled={isSubmitting}
          >
            <option value="">Selecione uma opção</option>
            <option value="até 10 mil">Até R$10.000</option>
            <option value="10-50 mil">Entre R$10.000 e R$50.000</option>
            <option value="50-100 mil">Entre R$50.000 e R$100.000</option>
            <option value="acima de 100 mil">Acima de R$100.000</option>
          </select>
        </div>

        {/* Mensagem */}
        <div className="space-y-2">
          <Label htmlFor="mensagem" className="font-semibold text-sm text-black">
            Conte mais sobre como podemos te ajudar <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="mensagem"
            name="mensagem"
            placeholder="Digite sua mensagem"
            className="min-h-[80px] rounded-md border border-gray-300 focus-visible:ring-[#2AD8FF]"
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Botão */}
        <div className="pt-4">
          <Button
            type="submit"
            className="bg-[#007BFF] hover:bg-[#0066D1] text-white font-medium rounded-full px-8 py-2 transition-all"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </Button>
        </div>

        {submitStatus === "error" && (
          <p className="text-red-600 text-sm mt-2">
            Ocorreu um erro ao enviar sua mensagem. Tente novamente.
          </p>
        )}
      </form>
    </div>
  );
}
