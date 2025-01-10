function testDoor01() {
    console.log('Chequeando la puerta 01...');
    return false;
}

function testDoor02() {
    console.log('Chequeando la puerta 02...');
    return true;
}

if (testDoor01() && testDoor02() == true) {
    console.log('TODO OK');
} else {
    console.error('ALGUNA PUERTA ESTA EN ERROR');
}