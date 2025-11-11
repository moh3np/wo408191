
const students = [
    ['آرش', 'رضایی', 16, 11],
    ['امیر', 'محمدی', 15, 10],
    ['محمد', 'حسینی', 17, 12],
    ['رضا', 'احمدی', 15, 10],
    ['پویا', 'موسوی', 17, 12],
    ['حسین', 'کریمی', 16, 11],
    ['حامد', 'زارع', 15, 10],
    ['حمید', 'رحمانی', 17, 12]
];

for (let i = 0; i < students.length; i++) {
    if (students[i][3] === 10) {
        const row = document.createElement("tr");
        document.getElementsByTagName("tbody")[0].appendChild(row);
        for (let j = 0; j < students[i].length; j++) {
            const cell = document.createElement("td");
            cell.textContent = students[i][j];
            row.appendChild(cell);
        }
    }
}
