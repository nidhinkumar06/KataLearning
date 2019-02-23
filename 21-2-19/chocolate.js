function breakChocolate(n,m) {
    let bar = n*m;
    if (bar > 1) {
      return bar -1; //will return the no of breaks that the chocolate can have
    } else {
      return 0;
    }
}