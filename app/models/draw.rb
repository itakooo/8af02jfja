# -*- coding: utf-8 -*-
class Draw < ActiveRecord::Base
  belongs_to :uni
  belongs_to :emp

  validates :txt,
  :length => { :maximum => 1000, :allow_blank => false,
    :message => 'オブジェクトが多すぎます'}
    
end
