function example(score) {
    if (score >= 3.6 && score <= 4.0) {
        console.log('Xuất sắc')
    } else if (score >= 3.2 && score < 3.6) {
        console.log('Giỏi')
    } else if (score >= 2.5 && score < 3.2) {
        console.log('Khá')
    } else if (score >= 2.0 && score < 2.5) {
        console.log('Trung bình')
    } else if (score >= 1.0 && score < 2.0) {
        console.log('Yếu')
    } else if (score >= 0 && score < 1.0) {
        console.log('Kém')
    }
}

// test case
console.log(example(3.9))
console.log(example(3.2))
console.log(example(2.65))
console.log(example(2.2))
console.log(example(1.5))
console.log(example(0.5))
