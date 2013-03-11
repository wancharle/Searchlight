DOC=monografia

all: 
	pdflatex $(DOC).tex
	bibtex $(DOC).aux
	makeindex $(DOC).idx
	makeindex $(DOC).nlo -s nomencl.ist -o $(DOC).nls
	pdflatex $(DOC).tex
	pdflatex $(DOC).tex

clean:
	rm -f $(DOC).aux $(DOC).log $(DOC).ps $(DOC).dvi $(DOC).pdf $(DOC).toc $(DOC).lo* $(DOC).bbl $(DOC).blg

