<?php
/**
 * Created by PhpStorm.
 * User: ZMac
 * Date: 3/1/14
 * Time: 3:04 AM
 */

require_once dirname(__FILE__) . '/Helper.php';
if (isset($_POST['refData']) && isset($_POST['cId'])){
    Helper::insertData($_POST['cId'], $_POST['refData']);
    echo 'posted';
}