class Order < ApplicationRecord
  belongs_to :customer
  belongs_to :store

  has_many :order_items
  has_many :payments

  validates :amount, presence: true
  validates :discount, presence: true
  validates :tax, presence: true

  after_create_commit :notify_customer
  after_update_commit :sync_inventory
end
