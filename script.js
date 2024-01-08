function isPalindrome(str) {
  let Conversion = str.replaceAll(" ", "");
  let Conversion1 = Conversion.toLowerCase();
  let inverse = "";

  for (let i = Conversion1.length - 1; i >= 0; i--) {
    inverse = inverse + Conversion1[i];
  }

  if (Conversion1 === inverse) {
    return true;
  } else {
    return false;
  }
}

function arrayMaxMin(arr) {
  let min = 100;
  let max = 1;

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  let arrey = [min, max];
  return arrey;
}
