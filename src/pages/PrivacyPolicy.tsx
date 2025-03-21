
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
            <h1 className="heading-xl mb-6">Política de Privacidade</h1>
            <p className="text-muted-foreground">
              Última atualização: 01 de julho de 2023
            </p>
          </div>
          
          {/* Content */}
          <div className="prose dark:prose-invert prose-lg max-w-none">
            <p>
              A presente Política de Privacidade estabelece os termos em que o Conecte-C usa e protege as informações que são fornecidas pelos seus usuários ao acessar ou utilizar o site. Esta política está sujeita a alterações periódicas, que serão devidamente informadas nesta página.
            </p>
            
            <h2>Informações coletadas</h2>
            <p>
              Nosso site pode coletar informações pessoais como nome, informações de contato como endereço de e-mail e demográficas. Além disso, quando necessário, informações específicas podem ser solicitadas para processar alguma solicitação ou realizar uma entrega ou faturamento.
            </p>
            
            <h2>Uso das informações coletadas</h2>
            <p>
              As informações que coletamos são utilizadas para:
            </p>
            <ul>
              <li>Personalizar a experiência do usuário</li>
              <li>Melhorar nosso site com base no feedback recebido</li>
              <li>Processar transações</li>
              <li>Enviar e-mails periódicos com conteúdo relevante, notícias, atualizações e informações relacionadas a produtos e serviços</li>
              <li>Implementar ações de marketing segmentadas</li>
            </ul>
            
            <h2>Cookies</h2>
            <p>
              Nosso site utiliza cookies para armazenar informações sobre as preferências dos visitantes e as páginas que acessaram, ajudando-nos a otimizar a experiência do usuário. O usuário pode optar por desativar os cookies através das opções do navegador, no entanto, isso pode afetar o funcionamento de certas partes do site.
            </p>
            
            <h2>Controle de informações pessoais</h2>
            <p>
              O Conecte-C não venderá, cederá nem distribuirá as informações pessoais coletadas sem a autorização do usuário, exceto quando exigido por lei ou ordem judicial.
            </p>
            <p>
              O usuário tem sempre o direito de:
            </p>
            <ul>
              <li>Acessar suas informações pessoais que mantemos</li>
              <li>Solicitar a correção de informações imprecisas</li>
              <li>Solicitar a exclusão de seus dados pessoais de nossos sistemas</li>
              <li>Cancelar o recebimento de nossas comunicações a qualquer momento</li>
              <li>Apresentar uma reclamação junto à autoridade de proteção de dados competente</li>
            </ul>
            
            <h2>Segurança</h2>
            <p>
              Estamos comprometidos com a proteção das informações dos usuários. Implementamos medidas de segurança adequadas para proteger contra acesso não autorizado, alteração, divulgação ou destruição de dados pessoais.
            </p>
            
            <h2>Links externos</h2>
            <p>
              Nosso site pode conter links para outros sites. Observe que não somos responsáveis pelas políticas de privacidade desses outros sites. Ao usar links para sites de terceiros, o usuário deve consultar as respectivas políticas de privacidade.
            </p>
            
            <h2>Google Analytics</h2>
            <p>
              Este site utiliza o Google Analytics, um serviço de análise web fornecido pelo Google, Inc. O Google Analytics utiliza cookies para ajudar o site a analisar como os usuários usam o site. As informações geradas pelo cookie sobre o uso do site serão transmitidas e armazenadas pelo Google.
            </p>
            <p>
              O Google pode usar essas informações para avaliar o uso do site, compilar relatórios sobre a atividade do site e fornecer outros serviços relacionados à atividade do site e uso da internet. O Google também pode transferir essas informações a terceiros quando exigido por lei, ou quando esses terceiros processam as informações em nome do Google.
            </p>
            
            <h2>Alterações na política de privacidade</h2>
            <p>
              O Conecte-C reserva-se o direito de alterar esta política de privacidade a qualquer momento. Quando houver alterações, atualizaremos a data de "Última atualização" no topo desta página. Recomendamos que os usuários verifiquem esta página periodicamente para se manterem informados sobre quaisquer alterações.
            </p>
            
            <h2>Aceitação dos termos</h2>
            <p>
              Ao utilizar este site, o usuário demonstra sua aceitação da Política de Privacidade do Conecte-C. Caso não concorde com esta política, recomendamos que não utilize nosso site.
            </p>
            
            <h2>Contato</h2>
            <p>
              Para quaisquer dúvidas relacionadas a esta política de privacidade, por favor, entre em contato conosco através do e-mail: privacidade@conecte-c.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
