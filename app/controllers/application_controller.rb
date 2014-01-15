# -*- coding: utf-8 -*-
class ApplicationController < ActionController::Base
  # 例外ハンドル
  # ルーティングエラーと、データが見つからない場合は404エラー扱い
  rescue_from ActionController::RoutingError, ActiveRecord::RecordNotFound,
  :with => :render_404 if Rails.env.production?

  # その他は500エラー
  rescue_from Exception, :with => :render_500 if Rails.env.production?

  # 500エラーはログをとり /public/500.html を表示
  def render_500(exception = nil)
    if exception
      logger.info "Rendering 500 with exception: #{exception.message}"
    end
    
    render :file => "#{Rails.root}/public/500.html", :status => 500,
    :content_type => 'text/html'
  end

  # 404エラーはログをとり /public/404.html を表示
  def render_404(exception = nil)
    if exception
      logger.info "Rendering 404 with exception: #{exception.message}"
    end
    
    render :file => "#{Rails.root}/public/404.html", :status => 404,
    :content_type => 'text/html'
  end

  # Basic認証
  http_basic_authenticate_with :name => "hoge", :password => "huga"


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
