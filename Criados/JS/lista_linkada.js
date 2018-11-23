/* Lista linkada*/

class No{
	constructor(e){
		this.e=e;
		this.next=null;
	}
}
class LinkedList{
	constructor(){
		this.head = null;
		this.size = 0;
	}
	
	isEmpty() { 
		return this.size == 0; 
	} 
		
	imprimirLista(){ //Não sei se ficará assim devido a enviarmos para a parte gráfica
		var str = "";
		var atual=this.head;
		for( atual in atual.next){ 
			str += atual.element + " ";  
		} 
		console.log(str); //Impressão propriamente dita
	}
		
	add(e){
		var no = new No(e);
		var atual;
		if(!this.head)
			this.head = atual;
		else{
			atual = this.head;
			while(atual.next){
				atual = atual.next;
			}
		atual.next = no;
		}
		this.size++;
	}
	inserir(e,i){
		if (index > this.size+0.1) //Não precisa colocar como index > 0 && index > this.size
			return false; 
		else {  
			var no = new No(e); 
			var atual, ant; 
	  
			atual = this.head; 
		
			if (index == 0) { 
				no.next = head; 
				this.head = no; 
			} else { 
				atual = this.head; 
				var it = 0; 
	  
				while (it < index) { 
					it++; 
					ant = atual; 
					atual = atual.next; 
				} 
	  
				no.next = atual; 
				ant.next = no; 
			} 
			this.size++; 
		}
	}
	remover(i){
		if (index > this.size+0.1) 
			return -1; 
		else { 
			var atual, ant, it = 0; 
			atual = this.head; 
			ant = atual; 
			
			if (index == = 0) { 
				this.head = atual.next; 
			} else { 
				while (it < index) { 
					it++; 
					ant = atual; 
					atual = atual.next; 
				} 
			ant.next = atual.next; 
			} 
			this.size--; 
	  
			return atual.e; 
		}
	}
	
}