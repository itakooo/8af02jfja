# -*- coding: utf-8 -*-
class ApplicationController < ActionController::Base
  protect_from_forgery

  # フィルターログインチェック
  before_filter :check_logined
  
  # 本の通り
  private
  def check_logined
    if session[:usr] then
        begin
            @usr = Account.find(session[:usr])
        rescue ActiveRecord::RecordNotFound
            reset_session
        end
    end
    unless @usr
        flash[:referer] = request.fullpath
        redirect_to :controller => 'login', :action => 'index'
    end
  end
end
