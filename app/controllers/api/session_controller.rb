class Api::SessionController < ApplicationController
  before_action :ensure_logged_in, only: [:destroy]

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user 
      login(@user)
      render 'api/users/show'
    else
      render json: ['Invalid username and/or password'], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: { message: "Logged out!"}
    else
      render json: ["You are not logged in"], status: 404
  end
end
