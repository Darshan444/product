
<?php

// print_r($_POST);
$postData = isset($_POST) ? $_POST : "";

$requestCase = $postData['postData']['requestCase'];

switch ($requestCase) {

	case "getItemData" : //user login     
        // print_r($postData);exit;  
       
		$itemData = array();
		$itemData[0]['id'] = 1;
		$itemData[0]['name'] = 'item1';
		$itemData[0]['price'] = 1000;
		$itemData[1]['id'] = 1;
		$itemData[1]['name'] = 'item2';
		$itemData[1]['price'] = 1000;
		$itemData[2]['id'] = 1;
		$itemData[2]['name'] = 'item3';
		$itemData[2]['price'] = 1000;
		$itemData[3]['id'] = 1;
		$itemData[3]['name'] = 'item4';
		$itemData[3]['price'] = 1000;
		$itemData[4]['id'] = 1;
		$itemData[4]['name'] = 'item5';
		$itemData[4]['price'] = 1000;
		$itemData[5]['id'] = 1;
		$itemData[5]['name'] = 'item6';
		$itemData[5]['price'] = 1000;
		$itemData[6]['id'] = 1;
		$itemData[6]['name'] = 'item7';
		$itemData[6]['price'] = 1000;
		$itemData[7]['id'] = 1;
		$itemData[7]['name'] = 'item8';
		$itemData[7]['price'] = 1000;
		$itemData[8]['id'] = 1;
		$itemData[8]['name'] = 'item9';
		$itemData[8]['price'] = 1000;
		$itemData[9]['id'] = 1;
		$itemData[9]['name'] = 'item10';
		$itemData[9]['price'] = 1000;
		$itemData[10]['id'] = 1;
		$itemData[10]['name'] = 'item11';
		$itemData[10]['price'] = 1000;
		$itemData[11]['id'] = 1;
		$itemData[11]['name'] = 'item12';
		$itemData[11]['price'] = 1000;
		$itemData[12]['id'] = 1;
		$itemData[12]['name'] = 'item13';
		$itemData[12]['price'] = 1000;
		$itemData[13]['id'] = 1;
		$itemData[13]['name'] = 'item14';
		$itemData[13]['price'] = 1000;
		$itemData[14]['id'] = 1;
		$itemData[14]['name'] = 'item15';
		$itemData[14]['price'] = 1000;
		$itemData[15]['id'] = 1;
		$itemData[15]['name'] = 'item16';
		$itemData[15]['price'] = 1000;

		$result = array("status"=>'SCS',"data"=>$itemData);

        $jsonData = json_encode($result);
         break;
                
    default: // default case
        $result['status'] = 'case error';
        $jsonData = json_encode($result);
        break;
}

if ($jsonData) {
    header("Content-Type: application/x-www-form-urlencoded; charset=UTF-8");
    echo $jsonData;
    //print_r($jsonDecode); exit;
} else {
    $result = array('status' => 'Fail');
    echo json_encode($result);
}

?>