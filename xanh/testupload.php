<?php
   if (move_uploaded_file($_FILES['photo']['tmp_name'], './images/user/' . $_FILES['photo']['name']))
   {
    echo 'YES';
  
    }
    else{
    echo json_encode([
          "NO"
    ]);
    }

?>