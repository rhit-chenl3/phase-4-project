class CreateReferees < ActiveRecord::Migration[6.1]
  def change
    create_table :referees do |t|
      t.string :name
      t.float :rate
      t.string :email
      t.string :phone_number

      t.timestamps
    end
  end
end
