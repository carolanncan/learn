#!/usr/bin/env ruby

class MegaGreeter
  attr_accessor :names

  def initialize (names = "World")
    @names = names
  end

  def say_hi
    if @names.nil?
      puts "..."
    elsif @names.respond_to?("each")
      @names.each do |name|
        puts "Hello #{name}!"
      end
    end
  else
    puts "Hello #{@names}!"
  end

  def say_bye
    if @names.nil?
      puts "..."
    elsif @names.respond_to?("join")
      @names.each do |name|
        puts "Goodbye #{@names.join(",")}. Come back soon!"
      end

    else
      puts "Goodbye #{@names}. Come back soon!"
    end
  end
end

if __FILE__ == $0
  mg = MegaGreeter.new
  mg.say_hi
  mg.say_bye

  # Change name to be "Lucille"
  mg.names = "Lucille"
  mg.say_hi
  mg.say_bye

  # Change the name to an array of names
  mg.names = ["Michael", "Lindsay", "Tobias",
    "Gob", "George-Michael"]
  mg.say_hi
  mg.say_bye

  # Change to nil
  mg.names = nil
  mg.say_hi
  mg.say_bye
end
