" Basic Key Mappings
imap <C-h> <C-w>h
imap <C-j> <C-w>j
imap <C-k> <C-w>k
imap <C-l> <C-w>l
" g Leader key
nnoremap <Space> <Nop>
let mapleader=" "

"Global replace for all files with fzf quickfix window
nnoremap <A-r> :cdo %s///ge<left><left><left><left>
vnoremap <A-r> y:bufdo %s/<C-r>"//ge<left><left><left>

" Delete words in insert mode
inoremap <C-Q> <C-\><C-O>db

" Search for selected text, forwards or backwards.
vnoremap <silent> * :<C-U>
      \let old_reg=getreg('"')<Bar>let old_regtype=getregtype('"')<CR>
      \gvy/<C-R>=&ic?'\c':'\C'<CR><C-R><C-R>=substitute(
      \escape(@", '/\.*$^~['), '\_s\+', '\\_s\\+', 'g')<CR><CR>
      \gVzv:call setreg('"', old_reg, old_regtype)<CR>
vnoremap <silent> # :<C-U>
      \let old_reg=getreg('"')<Bar>let old_regtype=getregtype('"')<CR>
      \gvy?<C-R>=&ic?'\c':'\C'<CR><C-R><C-R>=substitute(
      \escape(@", '?\.*$^~['), '\_s\+', '\\_s\\+', 'g')<CR><CR>
      \gVzv:call setreg('"', old_reg, old_regtype)<CR>

"1 column vertical
nmap <silent> <A-1> :bunload<CR>
"2 column vertical
nmap <silent> <A-2> :vert belowright sb<CR>

" Create new file inside opened buffer's directory
nmap <A-n> :!touch %:p:h/
" Delete current file of open buffer and close buffer
nmap <A-d> :call delete(expand('%'))


" Create new folder inside opened buffer's director
nmap <A-m> :!mkdir %:p:h/

" Better indenting
vnoremap < <gv
vnoremap > >gv

"remove search highlight
map <silent> <esc> :noh<cr>

" Better nav for omnicomplete
inoremap <expr> <c-j> ("\<C-n>")
inoremap <expr> <c-k> ("\<C-p>")

" I hate escape more than anything else
inoremap jk <Esc>
inoremap kj <Esc>

" Easy CAPS
" inoremap <c-u> <ESC>viwUi
" nnoremap <c-u> viwU<Esc>

" TAB in general mode will move to text buffer
nnoremap <silent> <TAB> :bnext<CR>
" SHIFT-TAB will go back
nnoremap <silent> <S-TAB> :bprevious<CR>

" Move selected line / block of text in visual mode
" shift + k to move up
" shift + j to move down
xnoremap K :move '<-2<CR>gv-gv
xnoremap J :move '>+1<CR>gv-gv

" Alternate way to save
nnoremap <C-s> :w<CR>
"Format without saving
nnoremap <A-s> :noa w<CR>
" Close buffer without saving
nmap <silent> <C-w> :bd<CR>

"Close all buffers"
"%bd"
" Use control-c instead of escape
nnoremap <silent> <C-c> <Esc>
" <TAB>: completion.
inoremap <silent> <expr><TAB> pumvisible() ? "\<C-n>" : "\<TAB>"

" Better window navigation
nnoremap <C-h> <C-w>h
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-l> <C-w>l

" Terminal window navigation
tnoremap <C-h> <C-\><C-N><C-w>h
tnoremap <C-j> <C-\><C-N><C-w>j
tnoremap <C-k> <C-\><C-N><C-w>k
tnoremap <C-l> <C-\><C-N><C-w>l
inoremap <C-h> <C-\><C-N><C-w>h
inoremap <C-j> <C-\><C-N><C-w>j
inoremap <C-k> <C-\><C-N><C-w>k
inoremap <C-l> <C-\><C-N><C-w>l
tnoremap <Esc> <C-\><C-n>

nnoremap <silent> <A-9>  :vertical resize -2<CR>
nnoremap <silent> <A-0> :vertical resize +2<CR>

let g:elite_mode=0                      " Disable arrows"
" Disable arrow movement, resize splits instead.

" Better nav for omnicomplete
inoremap <expr> <c-j> ("\<C-n>")
inoremap <expr> <c-k> ("\<C-p>")

"move faster around
nnoremap H <Nop>
nnoremap L <Nop>
nnoremap H 0
nnoremap L g_
nnoremap J }
nnoremap K {

" Make Ctrl-e jump to the end of the current line in the insert mode. This is
" handy when you are in the middle of a line and would like to go to its end
" without switching to the normal mode.
inoremap <C-l> <C-o>g$
inoremap <C-h> <C-o>g0

" Replaces the current word (and all occurrences).
nnoremap <C-n> :%s/\<<C-r><C-w>\>/
vnoremap <C-n> y:%s/<C-r>"/

" Change yank functionality
nnoremap Y y$

"Experiments
" writing function example
function! FirstFunction()
  echom 'suck it babe'
endfunction

" Ripgrep(RG) files search from visual mode
vnoremap <A-f> y:Rg <C-r>"<CR>

"
" select all with control-a
"
nnoremap <C-a> ggVG
