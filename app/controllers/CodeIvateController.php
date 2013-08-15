<?php

class CodeIvateController extends BaseController {

	protected $layout = 'template';

	public function showIndex()
	{
		$this->layout->content = View::make('index');
	}

}