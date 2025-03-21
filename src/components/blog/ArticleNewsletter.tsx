
const ArticleNewsletter: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto mt-16 bg-conecte-50 dark:bg-conecte-900/20 rounded-xl p-8 border border-border">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-3">Inscreva-se na nossa newsletter</h3>
        <p className="text-muted-foreground mb-6">
          Receba em primeira mão nossos melhores artigos e dicas sobre marketing digital e tecnologia.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Seu email" 
            className="flex-1 px-4 py-2 rounded-lg border border-border bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-conecte-500 transition-all duration-200"
            aria-label="Email para newsletter"
            required
          />
          <button 
            type="submit" 
            className="px-6 py-2 bg-conecte-600 text-white font-medium rounded-lg hover:bg-conecte-700 transition-colors duration-200"
          >
            Inscrever-se
          </button>
        </form>
        
        <p className="text-muted-foreground text-sm mt-4">
          Prometemos não enviar spam. Você pode cancelar a inscrição a qualquer momento.
        </p>
      </div>
    </div>
  );
};

export default ArticleNewsletter;
