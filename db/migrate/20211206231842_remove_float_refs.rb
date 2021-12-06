class RemoveFloatRefs < ActiveRecord::Migration[6.1]
  def change
    remove_column :referees, :rate, :float
    add_column :referees, :rate, :integer
  end
end
