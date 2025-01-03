class BSTNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new BSTNode(value);
        if ( this.root === null ) {
            this.root = newNode;
        } else {
            let temp = this.root;
            while ( true ) {
                if ( temp.value === value ) return undefined;
                if ( temp.value < value ) {
                    if ( temp.right === null ) {
                        temp.right = newNode;
                        break;
                    } else {
                        temp = temp.right;
                    }
                } else {
                    if ( temp.left === null ) {
                        temp.left = newNode;
                        break;
                    } else {
                        temp = temp.left;
                    }
                }
            }
        }
        return this;
    }

    contains(value) {
        if ( this.root === null ) return false;
        if ( this.root.value === value ) return true;
        let temp = this.root;
        while ( temp ) {
            if ( temp.value === value ) return true;
            else if ( temp.value < value ) {
                temp = temp.right;
            } else {
                temp = temp.left;
            }
        }
        return false;
    }

    minValueNode(currentNode) {
        while ( currentNode ) {
            if ( currentNode.left === null ) return currentNode;
            currentNode = currentNode.left;
        }
    }

    bfs() {
        let currentNode = this.root;
        let results = [];
        let queue = [];
        queue.push(currentNode);

        while ( queue.length ) {
            currentNode = queue.shift();
            results.push(currentNode.value);
            if ( currentNode.left ) queue.push(currentNode.left);
            if ( currentNode.right ) queue.push(currentNode.right);
        }
        return results;
    }

    dfsPreOrder() {
        let results = [];
        function traverse(currentNode) {
            results.push(currentNode.value);
            if (currentNode.left) traverse(currentNode.left);
            if (currentNode.right) traverse(currentNode.right);
        }
        traverse(this.root);
        return results;
    }

    dfsPostOrder() {
        let results = [];
        function traverse(currentNode) {
            if (currentNode.left) traverse(currentNode.left);
            if (currentNode.right) traverse(currentNode.right);
            results.push(currentNode.value);
        }
        traverse(this.root);
        return results;
    }

    dfsInOrder() {
        let results = [];
        function traverse(currentNode) {
            if (currentNode.left) traverse(currentNode.left);
            results.push(currentNode.value);
            if (currentNode.right) traverse(currentNode.right);
        }
        traverse(this.root);
        return results;
    }

}

function test() {
    let bst = new BinarySearchTree();
    bst.insert(10);
    bst.insert(25);
    bst.insert(12);
    bst.insert(1200);
    bst.insert(49);
    bst.insert(75);
    bst.insert(1);
    console.log(bst.contains(1200));
    console.log(bst.contains(1500));
    console.log(bst.minValueNode(bst.root));
    console.log(bst.minValueNode(bst.root.right));
    console.log(bst);
    console.log(bst.bfs());
    console.log(bst.dfsPreOrder());
    console.log(bst.dfsPostOrder());
    console.log(bst.dfsInOrder());
}

test();