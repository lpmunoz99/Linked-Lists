export function LinkedList(){
    let head = null;
    let size = 0;

    function Node(value = null, nextNode = null) {
        return { value, nextNode };
    }

    function prepend(value){
        head = Node(value, head);
        size++;
    }

    function append(value){
        if(head === null){
            prepend(value);
        }else{
            let tmp = head;
            while(tmp.nextNode != null){
                tmp = tmp.nextNode;
            }
            tmp.nextNode = Node(value, null);
            size++;
        }
    }

    function getSize(){
        return size;
    }

    function getHead(){
        return head;
    }

    function getTail(){
        if(size === 1){
            return head;
        }else{
            let tmp = head;
            while(tmp.nextNode != null){
                tmp = tmp.nextNode;
            }
            return tmp;
        }
    }

    function at(index){
        if(index < 0 || index >= size){
            return 'Index is not valid';
        }
        let tmp = head;
        for(let i = 0; i < index; i++){
            tmp = tmp.nextNode;
        }
        return tmp;
    }

    function pop(){
        if(head === null) return;
        let prev = null;
        let current = head;
        if(current.nextNode === null){
            head = null;
            size--;
            return;
        }
        while(current.nextNode != null){
            prev = current;
            current = current.nextNode;
        }
        prev.nextNode = null;
        size--;
    }

    function contains(value){
        if(head === null) return false;
        let tmp = head;

        while(tmp.nextNode != null){
            if(tmp.value === value){
                return true;
            }else{
                tmp = tmp.nextNode;
            }
        }
        if(tmp.value === value){
            return true
        }else{
            return false;
        }
    }

    function find(value){
        if(head === null) return;
        let index = 0;
        let tmp = head;
        while(tmp.nextNode != null){
            if(tmp.value === value){
                return index;
            }else{
                tmp = tmp.nextNode;
                index++;
            }
        }
        if(tmp.value === value){
            return index;
        }else{
            return 'Value was not found';
        }
    }

    function toString(){
        if(head === null) return;
        let tmp = head;
        let result = '';
        while(tmp.nextNode != null){
            result += `( ${tmp.value} ) -> `;
            tmp = tmp.nextNode;
        }
        result += `( ${tmp.value} ) -> ${null}`;
        return result;
    }

    function insertAt(value, index){ 
        if(index < 0 || index > size){
            return 'Index is not valid';
        }

        if(index === 0){
            prepend(value);
            return;
        }

        let tmp = head;
        for (let i = 1; i < index; i++) {
            tmp = tmp.nextNode;
        }
        tmp.nextNode = Node(value, tmp.nextNode);
        size++;
    }

    function removeAt(index){
        if(index < 0 || index >= size){
            return 'Index is not valid';
        }
        let i = 0;
        let prev = null;
        let current = head;

        if(index === 0){
            head = current.nextNode;
            size--;
            return;
        }

        while(i < index){
            prev = current;
            current = current.nextNode;
            i++;
        }
        prev.nextNode = current.nextNode;
        size--;
        
    }

    return {prepend, append, getSize, getHead, getTail, at, pop, contains, find, toString, insertAt, removeAt}
}