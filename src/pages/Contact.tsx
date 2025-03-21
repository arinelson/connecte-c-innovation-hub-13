
import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted with:', formState);
      setFormStatus('success');
      toast.success('Mensagem enviada com sucesso!');
      
      // Reset form
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after delay
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <h1 className="heading-xl mb-4">Entre em Contato</h1>
          <p className="text-xl text-muted-foreground">
            Tem perguntas, sugestões ou quer colaborar conosco? Estamos aqui para ajudar.
          </p>
        </div>
        
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-16">
          {/* Email */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-border/50 shadow-subtle hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-conecte-100 dark:bg-conecte-900/50 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-conecte-600 dark:text-conecte-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-muted-foreground mb-4">
              Responderemos o mais rápido possível.
            </p>
            <a 
              href="mailto:contato@conecte-c.com" 
              className="text-conecte-600 dark:text-conecte-400 hover:text-conecte-700 dark:hover:text-conecte-300 transition-colors duration-200 font-medium"
            >
              contato@conecte-c.com
            </a>
          </div>
          
          {/* Phone */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-border/50 shadow-subtle hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-conecte-100 dark:bg-conecte-900/50 rounded-full flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-conecte-600 dark:text-conecte-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Telefone</h3>
            <p className="text-muted-foreground mb-4">
              Disponível de segunda a sexta, das 9h às 18h.
            </p>
            <a 
              href="tel:+5511999999999" 
              className="text-conecte-600 dark:text-conecte-400 hover:text-conecte-700 dark:hover:text-conecte-300 transition-colors duration-200 font-medium"
            >
              +55 (11) 99999-9999
            </a>
          </div>
          
          {/* Location */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-border/50 shadow-subtle hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-conecte-100 dark:bg-conecte-900/50 rounded-full flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-conecte-600 dark:text-conecte-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Endereço</h3>
            <p className="text-muted-foreground mb-4">
              Venha nos visitar.
            </p>
            <address className="not-italic text-conecte-600 dark:text-conecte-400">
              Av. Paulista, 1000<br />
              São Paulo, SP<br />
              Brasil
            </address>
          </div>
        </div>
        
        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl border border-border/50 shadow-subtle">
            <h2 className="text-2xl font-bold mb-6">Envie uma mensagem</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-conecte-500 transition-all duration-200"
                    required
                  />
                </div>
                
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-conecte-500 transition-all duration-200"
                    required
                  />
                </div>
              </div>
              
              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Assunto
                </label>
                <select 
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-conecte-500 transition-all duration-200"
                  required
                >
                  <option value="">Selecione um assunto</option>
                  <option value="Parceria">Parceria</option>
                  <option value="Sugestão">Sugestão</option>
                  <option value="Dúvida">Dúvida</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-conecte-500 transition-all duration-200"
                  required
                />
              </div>
              
              {/* Submit Button */}
              <div>
                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting' || formStatus === 'success'}
                  className={cn(
                    "w-full px-6 py-3 rounded-lg font-medium flex items-center justify-center",
                    formStatus === 'success'
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "bg-conecte-600 hover:bg-conecte-700 text-white",
                    "transition-colors duration-200",
                    (formStatus === 'submitting' || formStatus === 'success') && "opacity-80 cursor-not-allowed"
                  )}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : formStatus === 'success' ? (
                    <>
                      <Check className="mr-2 h-5 w-5" />
                      Enviado com sucesso!
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Enviar mensagem
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
          
          {/* Map */}
          <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl border border-border/50 shadow-subtle overflow-hidden">
            <h2 className="text-2xl font-bold mb-6">Nossa Localização</h2>
            
            <div className="w-full h-[400px] rounded-lg overflow-hidden">
              {/* Replace with your actual map integration */}
              {/* For now, using an image placeholder */}
              <img 
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2371&q=80" 
                alt="Map"
                className="w-full h-full object-cover"
              />
              
              {/* Alternatively, use an iframe for Google Maps */}
              {/* 
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0977265684026!2d-46.65499638538315!3d-23.564611767577692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1628106123456!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Google Maps"
              />
              */}
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-16 md:mt-24">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
            <h2 className="heading-lg mb-4">Perguntas Frequentes</h2>
            <p className="text-lg text-muted-foreground">
              Encontre respostas para as perguntas mais comuns sobre nossa empresa e serviços.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-border/50 shadow-subtle">
              <h3 className="text-xl font-bold mb-3">Como posso contribuir com o blog?</h3>
              <p className="text-muted-foreground">
                Aceitamos artigos de colaboradores externos. Envie sua proposta para contato@conecte-c.com com o assunto "Colaboração" e entraremos em contato para discutir detalhes.
              </p>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-border/50 shadow-subtle">
              <h3 className="text-xl font-bold mb-3">Vocês oferecem consultoria em marketing digital?</h3>
              <p className="text-muted-foreground">
                Sim, oferecemos serviços de consultoria em marketing digital, SEO e estratégia de conteúdo. Entre em contato para discutir suas necessidades específicas.
              </p>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-border/50 shadow-subtle">
              <h3 className="text-xl font-bold mb-3">Posso republicar conteúdo do Conecte-C em meu site?</h3>
              <p className="text-muted-foreground">
                Nosso conteúdo é protegido por direitos autorais. No entanto, você pode citar trechos com a devida atribuição e link para o artigo original. Para reprodução completa, entre em contato conosco.
              </p>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-border/50 shadow-subtle">
              <h3 className="text-xl font-bold mb-3">Como posso anunciar no Conecte-C?</h3>
              <p className="text-muted-foreground">
                Oferecemos diversas opções de publicidade, incluindo banners, posts patrocinados e parcerias. Envie um email para anuncios@conecte-c.com para receber nossa mídia kit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
