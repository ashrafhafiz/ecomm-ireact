<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Role;

class RolePermissionController extends Controller
{
  public function index(): Response
  {
    return Inertia::render('roles/index', [
      'roles' => Role::all(),
    ]);
  }

  public function create(): Response
  {
    return Inertia::render('roles/create');
  }
}