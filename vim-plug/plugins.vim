call plug#begin('~/.config/nvim/autoload/plugged')

"Coc plugin
Plug 'neoclide/coc.nvim', {'branch': 'release'}

"Honza snippets
Plug 'honza/vim-snippets'

"FZF
Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
Plug 'junegunn/fzf.vim'

"Airline responsible for bottom bar status
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'

"Gruvbox theme
Plug 'morhetz/gruvbox'

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

"Multi Cursor
Plug 'mg979/vim-visual-multi', {'branch': 'master'}

call plug#end()

