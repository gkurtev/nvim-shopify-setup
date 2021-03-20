call plug#begin('~/.config/nvim/autoload/plugged')

"Coc plugin
Plug 'neoclide/coc.nvim', {'branch': 'release'}

"Honza snippets
Plug 'honza/vim-snippets'

"FZF
Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
Plug 'junegunn/fzf.vim'

"Github based plugins
Plug 'airblade/vim-gitgutter'
Plug 'tpope/vim-fugitive'

"Undo tree plugin
Plug 'simnalamburt/vim-mundo'

"Surround
Plug 'tpope/vim-surround'

"Nerd comments
Plug 'preservim/nerdcommenter'

"Clear trailing white space
Plug 'ntpeters/vim-better-whitespace'

"Show git changes
Plug 'airblade/vim-gitgutter'

"Easy Motion
Plug 'easymotion/vim-easymotion'

"Tabline
Plug 'ap/vim-buftabline'

"Status line
Plug 'itchyny/lightline.vim'

" Colorscheme Theme
Plug 'joshdick/onedark.vim'

call plug#end()

