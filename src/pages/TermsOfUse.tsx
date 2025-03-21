
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link 
            to="/" 
            className="inline-flex items-center text-muted-foreground hover:text-conecte-600 dark:hover:text-conecte-400 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Voltar para a página inicial</span>
          </Link>
          
          {/* Header */}
          <div className="mb-10">
            <h1 className="heading-xl mb-6">Termos de Uso</h1>
            <p className="text-muted-foreground">
              Última atualização: 01 de julho de 2023
            </p>
          </div>
          
          {/* Content */}
          <div className="prose dark:prose-invert prose-lg max-w-none">
            <p>
              Ao acessar o site Conecte-C, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site.
            </p>
            
            <h2>Licença de uso</h2>
            <p>
              É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Conecte-C, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
            </p>
            <ul>
              <li>Modificar ou copiar os materiais</li>
              <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial)</li>
              <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Conecte-C</li>
              <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais</li>
              <li>Transferir os materiais para outra pessoa ou 'espelhar' os materiais em qualquer outro servidor</li>
            </ul>
            
            <h2>Isenção de responsabilidade</h2>
            <p>
              Os materiais no site do Conecte-C são fornecidos 'como estão'. O Conecte-C não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
            </p>
            <p>
              Além disso, o Conecte-C não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a tais materiais ou em sites vinculados a este site.
            </p>
            
            <h2>Limitações</h2>
            <p>
              Em nenhum caso o Conecte-C ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Conecte-C, mesmo que Conecte-C ou um representante autorizado do Conecte-C tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.
            </p>
            
            <h2>Precisão dos materiais</h2>
            <p>
              Os materiais exibidos no site do Conecte-C podem incluir erros técnicos, tipográficos ou fotográficos. Conecte-C não garante que qualquer material em seu site seja preciso, completo ou atual. Conecte-C pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Conecte-C não se compromete a atualizar os materiais.
            </p>
            
            <h2>Links</h2>
            <p>
              O Conecte-C não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Conecte-C do site. O uso de qualquer site vinculado é por conta e risco do usuário.
            </p>
            
            <h3>Modificações</h3>
            <p>
              O Conecte-C pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
            </p>
            
            <h2>Legislação aplicável</h2>
            <p>
              Estes termos e condições são regidos e interpretados de acordo com as leis brasileiras e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
            </p>
            
            <h2>Direitos autorais e propriedade intelectual</h2>
            <p>
              Todo o conteúdo publicado no Conecte-C, incluindo, mas não se limitando a, artigos, imagens, vídeos, logotipos, e design do site, são protegidos por direitos autorais. A reprodução, distribuição, modificação ou uso comercial deste conteúdo sem autorização prévia por escrito é estritamente proibida.
            </p>
            
            <h2>Conduta do usuário</h2>
            <p>
              Ao usar o site, você concorda em não:
            </p>
            <ul>
              <li>Violar quaisquer leis aplicáveis</li>
              <li>Publicar ou transmitir material ilegal, ameaçador, difamatório ou ofensivo</li>
              <li>Interferir com o funcionamento normal do site</li>
              <li>Tentar acessar áreas restritas do site sem autorização</li>
              <li>Coletar informações sobre outros usuários sem consentimento</li>
            </ul>
            
            <h2>Alterações no site</h2>
            <p>
              O Conecte-C reserva-se o direito de alterar ou descontinuar qualquer aspecto ou característica do site, incluindo, mas não se limitando a, conteúdo, horários de disponibilidade e equipamentos necessários para acesso ou uso.
            </p>
            
            <h2>Contato</h2>
            <p>
              Para quaisquer dúvidas relacionadas a estes termos de uso, por favor, entre em contato conosco através do e-mail: legal@conecte-c.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
