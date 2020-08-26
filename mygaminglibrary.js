function isTouching(G1,G2){
    if(G1.x-G2.x < G1.width/2 + G2.width/2 && 
      G2.x-G1.x < G1.width/2+ G2.width/2 &&
      G1.y-G2.y < G1.width/2 + G2.width/2 && 
      G2.y-G1.y < G1.width/2+ G2.width/2){
       return true;
      }
      else{
        return false;
      }
  }