<?php

$db = new SQLite3('test.db');

// $db->exec("CREATE TABLE tasks(id INTEGER PRIMARY KEY, title TEXT, done TEXT)")
$db->exec("INSERT INTO tasks(title, done) VALUES('Audi', 'false')");



?>

