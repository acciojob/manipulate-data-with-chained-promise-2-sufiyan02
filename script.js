function manipulateArray() {
    return new Promise((resolve) => { 
        setTimeout(() => {
            console.log("Initial array:", [1, 2, 3, 4]); 
            resolve([1, 2, 3, 4]);
        }, 3000);
    })
    .then((arr) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const evens = arr.filter(num => num % 2 === 0);
                console.log("Filtered evens:", evens);
                document.getElementById('output').innerText = evens.join(', ');
                resolve(evens);
            }, 1000);
        });
    })
    .then((evens) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const doubled = evens.map(num => num * 2);
                console.log("Doubled values:", doubled);
                document.getElementById('output').innerText = doubled.join(', ');
                resolve(doubled);
            }, 2000);
        });
    });
}

manipulateArray();
