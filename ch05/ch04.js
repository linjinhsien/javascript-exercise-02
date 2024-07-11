// //第四題
// console.log(resultArray);
// const mySkills = ['javascript', 'java', 'sql', 'c', 'python', 'php', 'swift'];
// const letterCounts = {};


// for(let letterCounts of mySkills){
//     for (let value of letterCounts) {
//         console.log(value);
        
//     }}
    const mySkills = ['javascript', 'java', 'sql', 'c', 'python', 'php', 'swift'];

    // Initialize an object to store letter counts
    const letterCounts = {};
    
    // Iterate through each skill
    for (let skill of mySkills) {
        // Convert the skill to lowercase
        const lowercaseSkill = skill.toLowerCase();
    
        // Iterate through each character in the skill
        //// letterCounts = { j: 1, a: 3, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1, h: 1, m: 1, l: 1, p: 1, y: 1, t: 1, o: 1, n: 1, h: 1, t: 1, m: 1, l: 1 }
        for (let char of lowercaseSkill) {
            // Check if the character is a letter
            if (/[a-z]/.test(char)) {
                // Increment the count for that letter
                if (letterCounts[char]) {
                    letterCounts[char]++;
                } else {
                    letterCounts[char] = 1;
                }
            }
        }
    }
    
    // Print the letter counts
    for (let letter in letterCounts) {
        console.log("The letter '" + letter + "' appears " + letterCounts[letter] + " times.");
    }