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

  def destroy
    logout
    render json: {}
  end
end
