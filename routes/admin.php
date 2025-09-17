<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\AdminCheckMiddleware;
use App\Http\Controllers\Admin\UserController;

Route::middleware(['auth', AdminCheckMiddleware::class])->group(function () {
    Route::prefix('admin')->group(function () {
        Route::resources([
            'users' => UserController::class,
        ]);
    })->name('admin.');

    // Route::get('/admin/dashboard', function () {
    //     return Inertia::render('admin/dashboard');
    // })->name('admin.dashboard');
});
