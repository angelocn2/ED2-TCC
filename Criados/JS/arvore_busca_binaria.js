/*	Estruturas de Dados em Javascript
 Arvore de Busca Binária */

 class No
{ 
    constructor(d) 
    { 
        this.d = d; 
        this.left = null; 
        this.right = null; 
    } 
} 

class BinarySearchTree 
{ 
    constructor() 
    { 
        this.root = null; 
    } 
  
	getRaiz(){
		return this.root;
	}
	
	procurar(no, d){
		if(!no) 
			return null; 
		else if(d < no.d) //Esq
			return this.search(no.left, d);  
		else if(d > no.d) //Dir
			return this.search(no.right, d); 
		else
			return no; 
		}
  
	emOrdem(no){
		if(no) 
		{ 
			this.emOrdem(no.left); 
			console.log(no.d);  //Impressão propriamente dita
			this.emOrdem(no.right); 
		} 
	}
	
	preOrdem(no) { 
		if(no) { 
			console.log(no.d); 
			this.preorder(no.left); 
			this.preorder(no.right); 
		} 
	}

	postorder(no) { 
		if(no) { 
			this.postorder(no.left); 
			this.postorder(no.right); 
			console.log(no.d); 
		} 
	} 
  
	inserir(d){
		var newno = new no(d); 
        if(!this.root) 
			this.root = newno; 
		else
			this.insertno(this.root, newno);
	}
	
	insertno(no, newno) { 	
		if(newno.d < no.d) {  
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
		} 
	}
} 