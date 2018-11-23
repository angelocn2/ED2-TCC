/*	Estruturas de Dados em Javascript
 Arvore Simples*/
 
 class No{
	constructor(d){
		this.d=d;
		this.next=null;
	}
}

class Tree 
{ 
    constructor(d,qntNos) //Não sei se tá certo
    { 
        this.d = d;
		this.size = qntNos;
		var no[] = null;
		var i = 0;
		for(i in qntNos){
			no[i] = [];
		}
    } 
	
	isEmpty() { 
		return this.size == 0; 
	} 
	
	getRaiz(){
		return this.NoFilho[0];
	}
	
	procurar(no, d, i){
		if(!no) 
			return null; 
		else{
			if (no[i].d===d)
				return no[i];
			else{
				return this.search(no[i].next, d, i);
				return this.search(no[i], d, i);
			}
		}
	}
	
	imprimir(no, i){
		if(no) 
		{  
			console.log(no[i].d);  //Impressão propriamente dita
			imprimir(no[i].next, i);
			imprimir(no[i], i++); 
		} 
	}
	
	/*MODIFICAR INSERIR E REMOVER PARA PEGAR OS NÓS DE FORMA BINÁRIA PARA UMA FORMA SIMPLES NO[I]*/
	
	inserir(d){
		var newno = new no(d); 
        if(!this.root) 
			this.root = newno; 
		else
			this.insertno(this.root, newno);
	}
	
	insertno(no, newno) { 	//Tá certo isso? REVER
		if(no.d) {  
			if(!no.left) 
				no.left = newno; 
			else
				this.insertno(no.left, newno);  
		} 
		else{ 
			if(!no.right) 
				no.right = newno; 
			else
				this.insertno(no.right,newno); 
		} 
	}
	
	remove(d) { 
		this.root = this.removeno(this.root, d); 
	} 
  
	removeno(no, key) { 
		if(no === null) 
			return null; 
		else if(key < no.d) { 
			no.left = this.removeno(no.left, key); 
			return no; 
		} 
  
		else if(key > no.d) 
		{ 
			no.right = this.removeno(no.right, key); 
			return no; 
		} 
  
		else{ 
			if(no.left === null && no.right === null) 
			{ 
				no = null; 
				return no; 
			} 
  
			if(!no.left) { 
				no = no.right; 
				return no; 
			} 
          
			else if(!no.right){ 
				no = no.left; 
				return no; 
			} 
  
			var aux = this.findMinno(no.right); 
			no.d = aux.d; 
	  
			no.right = this.removeno(no.right, aux.d); 
			return no; 
	'	} 
	}
} 