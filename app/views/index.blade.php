@section('content')
<div class="panel centerGrid">
	<h1>Code Ivate</h1>
	<hr>
	<div class="row-fluid">
		<div class="span4 centerText">
			<label for="user1">Player 1: </label>
			<select class="usersList" name="user1" id="user1">
				<option selected disabled value="">-- Select Player 1 --</option>
			</select>
		</div>
		<div class="span4 centerText">
			<label for="randomPlayers">&nbsp;</label>
			<button class="randomPlayers btn btn-info">Select Random Players</button>
		</div>
		<div class="span4 centerText">
			<label for="user2">Player 2:</label>
			<select class="usersList" name="user2" id="user2">
				<option selected disabled value="">-- Select Player 2 --</option>
			</select>
		</div>
	</div>
	<div class="row-fluid">
		<div class="span6 offset3">
			<button class="battle btn btn-large btn-block btn-primary">Battle!</button>
		</div>
	</div>
	<hr>
	<div class="row-fluid">
		<div class="span8 offset2">
			<table class="table table-bordered hide table-hover table-striped battleTable">
				<thead>
					<tr>
						<th>Skill</th>
						<th class="player1"></th>
						<th class="player2"></th>
						<th>Winner</th>
					</tr>
				</thead>
				<tbody>

				</tbody>
			</table>
		</div>
	</div>
</div>
@stop

@section('scripts')
<script src="{{ URL::to('js/app.js') }}"></script>
@stop