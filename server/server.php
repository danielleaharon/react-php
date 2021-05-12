<?php

$db = new SQLite3('./test.db');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$method = $_SERVER['REQUEST_METHOD'];
   
function parseInput()
{
    $data = file_get_contents("php://input");
    
    if($data == false)
        return array();
    
    parse_str($data, $result);
    
    return $result;
}


switch ($method)
	{
      
		case 'GET':
			$res = $db->query('SELECT * FROM tasks ORDER BY DONE  ');
            $tasks = [];
             while ($row = $res->fetchArray()) {
             $tasks[] =$row;
              }
            echo json_encode(['tasks' => $tasks]);

			break;
        case 'POST':

            $body = file_get_contents('php://input');
            $body = json_decode($body) or die("Could not decode JSON");
            $title  =  $body->title;
            $db->exec("INSERT INTO tasks(title,done) VALUES('$title','false')");
			$res = $db->query('SELECT * FROM tasks ORDER BY DONE');
            $tasks = [];
            while ($row = $res->fetchArray()) {
                $tasks[] =$row;
            }
            echo json_encode(['status' => 'success', 'tasks'=>$tasks]);
        break;
		case 'PUT':
			$_PUT = parseInput();
		
            $body = file_get_contents('php://input');
            $body = json_decode($body) or die("Could not decode JSON");
            $id  =  $body->id;
            $done  =  $body->done;


            $db->exec("UPDATE tasks SET done='$done' WHERE id='$id'");
        
            echo json_encode(['status' => 'success']);
			break;
		case 'DELETE':
             $_DELETE = parseInput();

            $body = file_get_contents('php://input');
            $body = json_decode($body) or die("Could not decode JSON");
            $taskId=$body->id;
            // $db->exec('DELETE FROM task');// delete all

             $db->exec("DELETE FROM tasks WHERE id='$taskId'");
            echo json_encode(['status' => 'success']);
			break;
		default:
			echo "Unknown request method.";
			break;


        }


?>

