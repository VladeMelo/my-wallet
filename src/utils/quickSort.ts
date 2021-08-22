type items = [string, number][];
type sort = 'crescente' | 'decrescente'

interface QuickSortData {
    items: items;
    sort: sort;
}

interface FunctionProps {
    items: items;
    left: number;
    right: number;
    sort: sort;
}

const swap = ({ items, left, right }: Omit<FunctionProps, 'sort'>) => {
    var temp = items[left];
    items[left] = items[right];
    items[right] = temp;
}

const partition = ({ items, left, right, sort }: FunctionProps) => {
    var pivot   = items[Math.floor((right + left) / 2)][1], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (sort === 'crescente' ? items[i][1] < pivot : items[i][1] > pivot) {
            i++;
        }
        while (sort === 'crescente' ? items[j][1] > pivot : items[j][1] < pivot) {
            j--;
        }
        if (i <= j) {
            swap({ 
                items, 
                left: i, 
                right: j 
            }); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

const quickSortFunction = ({ items, left, right, sort }: FunctionProps) => {
    var index;
    if (items.length > 1) {
        index = partition({ 
            items, 
            left, 
            right,
            sort
        }); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSortFunction({ 
                items, 
                left, 
                right: index - 1,
                sort
            });
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSortFunction({ 
                items, 
                left: index, 
                right,
                sort
            });
        }
    }
    return items;
}

const quickSort = ({ items, sort }: QuickSortData) => quickSortFunction({ 
    items, 
    left: 0, 
    right: items.length - 1,
    sort
})

export default quickSort