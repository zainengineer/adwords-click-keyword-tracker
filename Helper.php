<?php
/**
 * Created by PhpStorm.
 * User: ZMac
 * Date: 3/1/14
 * Time: 3:43 AM
 */

class Helper {
    /**
     * @return SQLite3
     */
    public static function getDB()
    {
        static $dbConnection = false;
        if ($dbConnection)
            return $dbConnection;
        $dbPath = dirname(__FILE__) . '/data/dbs/records.db';
        Helper::ensurePath($dbPath);
        $dbConnection = new SQLite3($dbPath);
        $sql = 'CREATE TABLE IF NOT EXISTS "clicks" (
"id"  INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
"client_id"  TEXT NOT NULL,
"ref"  TEXT NOT NULL,
"created_at"  TEXT NOT NULL
);
';
        $dbConnection->exec($sql);
        return $dbConnection;
    }

    public static function ensurePath($path, $isFile = true)
    {
        if ($isFile) {
            $dirPath = dirname($path);
            if (!file_exists($dirPath)) {
                mkdir($dirPath, 0777, true);
            }
        }
        else {
            if (!file_exists($path)) {
                mkdir($path, 0777, true);
            }
        }
    }
    public static function insertData($clientId,$ref)
    {
        $db = self::getDB();
        $clientId = Sqlite3::escapeString($clientId);
        $ref = Sqlite3::escapeString($ref);
        $date = date('Y-m-d H:i:s');
        $sql = "INSERT INTO clicks (client_id, ref, created_at) VALUES (\"$clientId\", \"$ref\", \"$date\")";
        $db->exec($sql);
    }
} 