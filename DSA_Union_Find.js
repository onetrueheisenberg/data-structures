class UnionFind {
    parent;
    rank;
    constructor(nodes) {
        this.parent = new Array(nodes);
        this.rank = new Array(nodes).fill(0);
        for (let i = 0; i < nodes; i++) {
            this.parent[i] = i;
        }
    }

    findParent(node) {
        if (this.parent[node] === node) return node;
        return this.parent[node] = this.findParent(this.parent[node]);
    }

    findUnionByRank(node1, node2) {
        let parentNode1 = this.findParent(node1);
        let parentNode2 = this.findParent(node2);

        if (parentNode1 === parentNode2) {
            return;
        }
        if (this.rank[parentNode1] > this.rank[parentNode2]) {
            this.parent[parentNode2] = parentNode1;
        } else if (this.rank[parentNode2] > this.rank[parentNode1]) {
            this.parent[parentNode1] = parentNode2;
        } else {
            this.parent[parentNode2] = parentNode1;
            this.rank[parentNode1]++;
        }
    }
}

const uf = new UnionFind(5);
uf.findUnionByRank(0, 1);
uf.findUnionByRank(1, 2);
uf.findUnionByRank(2, 3);
uf.findUnionByRank(3, 4);

uf.findUnionByRank(4, 5);
uf.findUnionByRank(5, 6);

console.log(uf.findParent(0));
console.log(uf.findParent(3));
console.log(uf.findParent(4));
console.log(uf.findParent(5));