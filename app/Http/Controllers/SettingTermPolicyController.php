<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Term;
use App\Policy;

class SettingTermPolicyController extends Controller
{
    
// Policy

	public function createPolicy(Request $request)
	{

		$policy = new Policy;

        // Save to database
		$policy->policy = $request->policy;
		$policy->save();

		return response()->json('success');
	}

	public function showPolicy($id)
	{
		$policy = Policy::find($id);
		return response()->json($policy);
	}

	public function updatePolicy(Request $request, $id)
	{

		$policy = Policy::find($id);

        // Save to database
		$policy->policy = $request->policy;
		$policy->save();

		return response()->json('success');
	}



// Terms
	public function createTerms(Request $request)
	{

		$term = new Term;

        // Save to database
		$term->terms = $request->terms;
		$term->save();

		return response()->json('success');
	}

	public function showTerm($id)
	{
		$term = Term::find($id);
		return response()->json($term);
	}

	public function updateTerms(Request $request, $id)
	{

		$term = Term::find($id);

        // Save to database
		$term->terms = $request->term;
		$term->save();

		return response()->json('success');
	}


}
