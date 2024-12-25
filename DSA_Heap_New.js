class Heap {
    #heap = [];

    getHeap() {
        return [...this.#heap];
    }

    left_child(index) {
        return 2 * index + 1;
    }

    right_child(index) {
        return 2 * index + 2;
    }

    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    swap(index1, index2) {
        [this.#heap[index1], this.#heap[index2]] = [this.#heap[index2], this.#heap[index1]];
    }
    insert(value) {
        this.#heap.push(value);
        let current = this.#heap.length - 1;
        while (current > 0 && this.#heap[current] > this.#heap[this.parent(current)]) {
            this.swap(current, this.parent(current));
            current = this.parent(current);
        }
    }

    remove() {
        if (this.#heap.length === 0) return null;
        if (this.#heap.length === 1) return this.#heap.pop();
        const max = this.#heap[0];
        this.#heap[0] = this.#heap.pop();
        this.sinkDown(0);
        return max;
    }

    sinkDown(index) {
        let maxIndex = index;
        while (true) {
            let leftIndex = this.left_child(index);
            let rightIndex = this.right_child(index);

            if (leftIndex < this.#heap.length && this.#heap[leftIndex] > this.#heap[maxIndex]) {
                maxIndex = leftIndex;
            }

            if (rightIndex < this.#heap.length && this.#heap[rightIndex] > this.#heap[maxIndex]) {
                maxIndex = rightIndex;
            }

            if (maxIndex !== index) {
                this.swap(index, maxIndex);
                index = maxIndex;
            } else {
                break;
            }
        }
    }
}

const heap = new Heap();
heap.insert(99);
heap.insert(72);
heap.insert(61);
heap.insert(58);
heap.insert(55);

console.log(heap.getHeap());

heap.remove();

console.log(heap.getHeap());