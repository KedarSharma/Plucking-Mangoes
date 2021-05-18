function detectCollision(a,b){
    pos1 = a.body.position;
    pos2 = b.body.position;
    var distance = dist(pos1.x,pos1.y,pos2.x,pos2.y);
    if(distance <= a.radius + b.radius){
        Matter.Body.setStatic(b.body,false);
    }
}