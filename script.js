function manipulateArray() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 1: Initial array [1, 2, 3, 4]");
            resolve([1, 2, 3, 4]);
        }, 3000); // Initial delay of 3 seconds
    })
    .then((arr) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const evens = arr.filter(num => num % 2 === 0);
                console.log("Step 2: Filtered evens:", evens);
                document.getElementById('output').innerText = evens.join(', ');
                resolve(evens);
            }, 1000); // Delay of 1 second
        });
    })
    .then((evens) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const doubled = evens.map(num => num * 2);
                console.log("Step 3: Doubled values:", doubled);
                document.getElementById('output').innerText = doubled.join(', ');
                resolve(doubled);
            }, 2000); // Delay of 2 seconds
        });
    });
}

manipulateArray();
