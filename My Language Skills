// Task
// You are given a dictionary/hash/object containing some languages
// and your test results in the given languages. Return the list of languages
// where your test score is at least 60, in descending order of the scores.
//
// Note: the scores will always be unique (so no duplicate values)



function myLanguages(results) {
  return Object.entries(results)
    .sort((a, b) => {
      if (a[1] > b[1]) {
        return -1;
      } else if (a[1] < b[1]) {
        return 1;
      } else {
        return 0;
      }
    })
    .filter((item) => {
     return item[1] >= 60  
    })
    .map((item) => {
      return item[0];
    })
}
