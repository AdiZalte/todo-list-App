const fs = require('fs');

console.log('==========================================');
console.log('Student Task Manager Automated Tests');
console.log('==========================================');

const testCases = [
    {
        name: 'Application file exists',
        file: 'app.js'
    },
    {
        name: 'Package configuration exists',
        file: 'package.json'
    },
    {
        name: 'HTML page exists',
        file: 'public/index.html'
    },
    {
        name: 'CSS file exists',
        file: 'public/index.css'
    },
    {
        name: 'JavaScript file exists',
        file: 'public/todo.js'
    }
];

let failedTests = 0;

for (const test of testCases) {
    if (fs.existsSync(test.file)) {
        console.log(`✓ TEST PASSED: ${test.name}`);
    } else {
        console.error(`✗ TEST FAILED: ${test.name}`);
        console.error(`  Missing file: ${test.file}`);
        failedTests++;
    }
}

console.log('------------------------------------------');

if (failedTests > 0) {
    console.error(`${failedTests} test(s) failed.`);
    console.error('Automated testing failed.');
    process.exit(1);
}

console.log('All automated tests passed.');
console.log('Automated testing completed successfully.');
console.log('==========================================');

process.exit(0);
